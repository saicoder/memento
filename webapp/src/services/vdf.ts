export const getSeed = async (secret: string) => {
  const { result } = await fetch('http://localhost:8080/forward', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ x: secret, e: '3', m: '1000000007', steps: 1000000 }),
  }).then((t) => t.json())

  return result as string
}

export const unlockSecret = async (seed: string, span = 1) => {
  const difficulty = 1_300_000
  const steps = Math.floor(difficulty * span)

  console.log('span', span, steps)

  const { result } = await fetch('http://localhost:8080/backward', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ x: seed, e: '3', m: '1000000007', steps }),
  }).then((t) => t.json())

  return result as string
}
