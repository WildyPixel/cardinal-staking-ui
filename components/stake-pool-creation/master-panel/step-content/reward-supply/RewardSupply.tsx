import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import { MultiplierInputs } from '@/components/stake-pool-creation/master-panel/step-content/reward-supply/MultiplierInputs'
import { ButtonDecrement } from '@/components/UI/buttons/ButtonDecrement'
import { ButtonIncrement } from '@/components/UI/buttons/ButtonIncrement'
import { NumberInput } from '@/components/UI/inputs/NumberInput'

import { LabelText } from '@/components/UI/typography/LabelText'
import { SelectInput } from '@/components/UI/inputs/SelectInput'
import { unitsOfTime } from '@/constants/index'

export const RewardSupply = () => {
  const [rewardAmountPerStakedToken, setRewardAmountPerStakedToken] =
    useState('')
  const [generationRate, setGenerationRate] = useState('1')
  const [selectedUnitOfTime, setSelectedUnitOfTime] = useState(
    unitsOfTime[0]?.value
  )

  return (
    <>
      <div className="pb-6">
        <div className="mb-2 flex w-full items-center">
          <LabelText>Rewards mint address</LabelText>
          <InformationCircleIcon className="ml-1 h-6 w-6 cursor-pointer text-gray-400" />
        </div>
        <NumberInput
          placeholder="0.000"
          value={rewardAmountPerStakedToken}
          onChange={(e) => setRewardAmountPerStakedToken(e.target.value)}
        />
      </div>
      <div className="pb-6">
        <div className="mb-2 flex w-full items-center">
          <LabelText>Reward generation rate</LabelText>
          <InformationCircleIcon className="ml-1 h-6 w-6 cursor-pointer text-gray-400" />
        </div>
        <div className="flex">
          <ButtonDecrement
            className="mr-3"
            onClick={() => {
              if (Number(generationRate) > 0) {
                setGenerationRate((Number(generationRate) - 1).toString())
              }
            }}
          />
          <NumberInput
            className="w-12 rounded-r-none text-center"
            value={generationRate}
            onChange={(e) => setGenerationRate(e.target.value)}
          />
          <SelectInput
            className="-ml-1 rounded-l-none"
            value={selectedUnitOfTime || ''}
            setValue={setSelectedUnitOfTime}
            options={unitsOfTime}
          />
          <ButtonIncrement
            className="ml-3"
            onClick={() =>
              setGenerationRate((Number(generationRate) + 1).toString())
            }
          />
        </div>
      </div>
      <MultiplierInputs />
    </>
  )
}
