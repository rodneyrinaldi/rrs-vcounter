import useSWR from 'swr'

function CounterNumber() {
  const { data, error } = useSWR('/api/addCounter')

  if (error) return <div>error...</div>
  if (!data) return <div>loading...</div>
  return <div>{data.number}</div>
}

export default CounterNumber