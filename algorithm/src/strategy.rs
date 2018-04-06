use record::Tier;
use simulation::{Bet, Simulator, Strategy, lookup, SALT_MINE_AMOUNT};


fn normalize(value: f64, min: f64, max: f64) -> f64 {
    // TODO is this correct ?
    if min == max {
        0.0

    } else {
        ((value - min) * (1.0 / (max - min))).max(0.0).min(1.0)
    }
}


#[derive(Debug, Clone, Copy)]
pub struct EarningsStrategy;

impl EarningsStrategy {
    // TODO better behavior for this ?
    fn bet_amount<A: Simulator>(&self, simulation: &A, _tier: &Tier, left: &str, right: &str) -> f64 {
        let current_money = simulation.current_money();
        let bet_amount = (SALT_MINE_AMOUNT / current_money).min(1.0).max(0.01);

        // TODO these f64 conversions are a little bit gross
        let left_len = simulation.matches_len(left) as f64;
        let right_len = simulation.matches_len(right) as f64;
        let len = normalize(left_len.min(right_len), 0.0, 10.0);

        if current_money < (SALT_MINE_AMOUNT * 100.0) {
            (current_money * bet_amount)

        } else {
            (current_money * bet_amount) * len
        }
    }

    pub fn expected_profits<A: Simulator>(&self, simulation: &A, tier: &Tier, left: &str, right: &str) -> (f64, f64) {
        let bet_amount = self.bet_amount(simulation, tier, left, right);

        (
            lookup::earnings(simulation.lookup_character(left), left, bet_amount),
            lookup::earnings(simulation.lookup_character(right), right, bet_amount)
        )
    }
}

impl Strategy for EarningsStrategy {
    fn bet<A: Simulator>(&self, simulation: &A, tier: &Tier, left: &str, right: &str) -> Bet {
        let bet_amount = self.bet_amount(simulation, tier, left, right);

        let (left_earnings, right_earnings) = self.expected_profits(simulation, tier, left, right);

        if (left_earnings - right_earnings).abs() > (bet_amount * 0.20) {
            if left_earnings > right_earnings {
                Bet::Left(bet_amount)

            } else if right_earnings > left_earnings {
                Bet::Right(bet_amount)

            } else {
                Bet::None
            }

        } else {
            Bet::None
        }
    }
}


#[derive(Debug, Clone, Copy)]
pub struct AllInStrategy;

impl AllInStrategy {
    fn calculate_money<A: Simulator>(&self, simulation: &A, _tier: &Tier, _left: &str, _right: &str) -> f64 {
        simulation.current_money()
    }
}

impl Strategy for AllInStrategy {
    fn bet<A: Simulator>(&self, simulation: &A, tier: &Tier, left: &str, right: &str) -> Bet {
        let left_winrate = lookup::winrate(simulation.lookup_character(left), left);
        let right_winrate = lookup::winrate(simulation.lookup_character(right), right);

        if (left_winrate - right_winrate).abs() > 0.20 {
            if left_winrate > right_winrate {
                Bet::Left(self.calculate_money(simulation, tier, left, right))

            } else if right_winrate > left_winrate {
                Bet::Right(self.calculate_money(simulation, tier, right, left))

            } else {
                Bet::None
            }

        } else {
            Bet::None
        }
    }
}
