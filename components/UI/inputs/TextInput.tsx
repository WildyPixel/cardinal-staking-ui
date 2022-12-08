import classNames from 'classnames'

export type TextInputProps = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  placeholder?: string
}

export const TextInput = ({
  value,
  onChange,
  className,
  placeholder,
}: TextInputProps) => {
  return (
    <input
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      className={classNames([
        'w-full rounded-lg bg-gray-800 p-2 outline outline-gray-600 focus:outline-orange-500',
        className,
      ])}
    />
  )
}