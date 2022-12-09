import { AuthorizationTipOne } from '@/components/stake-pool-creation/slave-panel-content/authorization/AuthorizationTipOne'
import { AuthorizationTipThree } from '@/components/stake-pool-creation/slave-panel-content/authorization/AuthorizationTipThree'
import { AuthorizationTipTwo } from '@/components/stake-pool-creation/slave-panel-content/authorization/AuthorizationTipTwo'
import { Intro } from '@/components/stake-pool-creation/slave-panel-content/Intro'
import { RewardDistributionTipOne } from '@/components/stake-pool-creation/slave-panel-content/reward-distribution/RewardDistributionTipOne'
import { RewardDistributionTipThree } from '@/components/stake-pool-creation/slave-panel-content/reward-distribution/RewardDistributionTipThree'
import { RewardDistributionTipTwo } from '@/components/stake-pool-creation/slave-panel-content/reward-distribution/RewardDistributionTipTwo'
import { RewardSupplyTipOne } from '@/components/stake-pool-creation/slave-panel-content/reward-supply/RewardSupplyTipOne'
import { RewardSupplyTipThree } from '@/components/stake-pool-creation/slave-panel-content/reward-supply/RewardSupplyTipThree'
import { RewardSupplyTipTwo } from '@/components/stake-pool-creation/slave-panel-content/reward-supply/RewardSupplyTipTwo'
import { TimeBasedParametersTipFour } from '@/components/stake-pool-creation/slave-panel-content/time-based-parameters/TimeBasedParametersTipFour'
import { TimeBasedParametersTipOne } from '@/components/stake-pool-creation/slave-panel-content/time-based-parameters/TimeBasedParametersTipOne'
import { TimeBasedParametersTipThree } from '@/components/stake-pool-creation/slave-panel-content/time-based-parameters/TimeBasedParametersTipThree'
import { TimeBasedParametersTipTwo } from '@/components/stake-pool-creation/slave-panel-content/time-based-parameters/TimeBasedParametersTipTwo'
import { SlavePanelScreens } from '@/components/stake-pool-creation/SlavePanel'

export type ContentPrimaryProps = {
  activeScreen: SlavePanelScreens
}

export const ContentPrimary = ({ activeScreen }: ContentPrimaryProps) => {
  const {
    INTRO,
    AUTHORIZATION_1,
    AUTHORIZATION_2,
    AUTHORIZATION_3,
    REWARD_DISTRIBUTION_1,
    REWARD_DISTRIBUTION_2,
    REWARD_DISTRIBUTION_3,
    REWARD_SUPPLY_1,
    REWARD_SUPPLY_2,
    REWARD_SUPPLY_3,
    TIME_BASED_PARAMETERS_1,
    TIME_BASED_PARAMETERS_2,
    TIME_BASED_PARAMETERS_3,
    TIME_BASED_PARAMETERS_4,
  } = SlavePanelScreens

  return (
    <div className="z-10 flex flex-col items-center">
      {activeScreen === INTRO && <Intro />}
      {activeScreen === AUTHORIZATION_1 && <AuthorizationTipOne />}
      {activeScreen === AUTHORIZATION_2 && <AuthorizationTipTwo />}
      {activeScreen === AUTHORIZATION_3 && <AuthorizationTipThree />}
      {activeScreen === REWARD_DISTRIBUTION_1 && <RewardDistributionTipOne />}
      {activeScreen === REWARD_DISTRIBUTION_2 && <RewardDistributionTipTwo />}
      {activeScreen === REWARD_DISTRIBUTION_3 && <RewardDistributionTipThree />}
      {activeScreen === REWARD_SUPPLY_1 && <RewardSupplyTipOne />}
      {activeScreen === REWARD_SUPPLY_2 && <RewardSupplyTipTwo />}
      {activeScreen === REWARD_SUPPLY_3 && <RewardSupplyTipThree />}
      {activeScreen === TIME_BASED_PARAMETERS_1 && (
        <TimeBasedParametersTipOne />
      )}
      {activeScreen === TIME_BASED_PARAMETERS_2 && (
        <TimeBasedParametersTipTwo />
      )}
      {activeScreen === TIME_BASED_PARAMETERS_3 && (
        <TimeBasedParametersTipThree />
      )}
      {activeScreen === TIME_BASED_PARAMETERS_4 && (
        <TimeBasedParametersTipFour />
      )}
    </div>
  )
}
