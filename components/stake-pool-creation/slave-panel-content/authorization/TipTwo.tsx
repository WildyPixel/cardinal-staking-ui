import { BodyCopy } from '@/components/UI/typography/BodyCopy'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export const TipTwo = () => {
  return (
    <>
      <div className="mb-6">
        <div className="pr-16">
          <Image
            src="/images/stake-pool-creation/authorization/tip-two.png"
            height={800}
            width={800}
            objectFit="contain"
          />
        </div>
        <BodyCopy className="flex items-center justify-center text-center">
          <InformationCircleIcon className="mr-2 inline-block h-6 w-6" />
          Allow for staking any tokens with specified by you creator
          address(es).
        </BodyCopy>
      </div>
    </>
  )
}
