import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text:'Pellentesque in ipsum id orci porta dapibus.' },
    {id: 'q2', author: 'Leo', text:'Proin eget tortor risus.' },
    {id: 'q3', author: 'Sara', text:'Donec rutrum congue leo eget malesuada.' },
    {id: 'q4', author: 'Martin', text:'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.' },
]
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes