import useTebo from '../lib/useTebo'

const petitionText = 'Tebo silakan jawab pertanyaan ini'
const invalidText = [
  'Tebo sepertinya belom mau menjawab',
  'Kata tebo mupengg',
  'Kuota tebo lagi habis',
  'Tebo lagi rebahan dulu bos',
  'Tebo belom percaya dengan anda',
]

export default function UserInput() {
  const { answer, showAnswer, props, formRef, reset } = useTebo(petitionText)

  function getRandomInvalidText() {
    return invalidText[Math.floor(Math.random() * invalidText.length)]
  }

  return (
    <form className='flex flex-col space-y-5 mt-6' ref={formRef}>
      <span className='text-gray-300 text-center text-sm sm:text-base'>
        Kata kunci : {petitionText}
      </span>
      <input type='text' placeholder='Permintaan' className='input' {...props.petitionProps} />
      <input type='text' placeholder='Pertanyaan' className='input' {...props.questionProps} />
      {showAnswer ? (
        <>
          <p className='text-red-800 font-medium mt-4 bg-red-300 px-3 py-2 rounded-md'>
            Jawaban : {answer || getRandomInvalidText()}
          </p>
          <button className='button' type='button' onClick={reset}>
            Tanya Lagi
          </button>
        </>
      ) : (
        <button className='button' type='submit'>
          Tanya
        </button>
      )}
    </form>
  )
}
