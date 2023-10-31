use anchor_lang::prelude::*;
declare_id!("2veFFi6gJ9TsbHNydxusajoFwKoV6hwWn3HYzhtMACy9");

#[program]
pub mod firstcustomproject{
    use super::*;
    pub fn test_function(ctx: Context<TestFunction>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct TestFunction{}
