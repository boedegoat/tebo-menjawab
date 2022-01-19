import { useEffect, useRef, useState } from 'react'

export default function useTebo(petitionText) {
  const [answer, setAnswer] = useState('')
  const [answerMode, setAnswerMode] = useState(false)
  const [petition, setPetition] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [question, setQuestion] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    formRef.current.addEventListener('submit', e => {
      e.preventDefault()
      setShowAnswer(true)
    })
  }, [])

  useEffect(() => {
    if (!answerMode) return
    console.clear()
    console.log({ jawaban: answer })
    setPetition(prevPetition => {
      let newPetition: string
      if (prevPetition.length - 1 <= answer.length) {
        newPetition = answer ? petitionText.slice(0, answer.length + 1) : petitionText[0]
      } else {
        newPetition = prevPetition.slice(0, -1)
      }
      return newPetition
    })
  }, [answer, answerMode])

  const questionProps = {
    value: question,
    onChange: e => {
      // if showAnswer true, freeze the inputs
      if (showAnswer) return
      setQuestion(e.target.value)
    },
  }

  const petitionProps = {
    value: petition,
    onKeyDown: e => {
      // if showAnswer true, freeze the inputs
      if (showAnswer) return
      if (e.key === '.') {
        setAnswerMode(!answerMode)
      }

      if (!answerMode) return
      // if answerMode is true

      // if key is a character
      if (e.key.length === 1 && e.key !== '.') {
        // add it to the answer
        setAnswer(prevAnswer => prevAnswer + e.key)
      }
      // if key is backspace
      if (e.key === 'Backspace') {
        if (!answer) {
          setPetition(prevPetition => prevPetition.slice(0, -1))
          return
        }
        // delete last character in the answer
        setAnswer(prevAnswer => prevAnswer.slice(0, -1))
      }
    },
    onChange: e => {
      // if showAnswer true, freeze the inputs
      if (showAnswer) return
      // if not in answerMode, set petition to exactly what user typed
      if (!answerMode) {
        setPetition(e.target.value.replace('.', ''))
        return
      }
    },
  }

  function reset() {
    setAnswer('')
    setShowAnswer(false)
    setPetition('')
    setAnswerMode(false)
    setQuestion('')
  }

  return { answer, showAnswer, formRef, reset, props: { petitionProps, questionProps } }
}
