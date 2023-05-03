import Pagination from 'react-bootstrap/Pagination';

function PaginationLanding(props) {

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item >{2}</Pagination.Item>
      <Pagination.Ellipsis />   

      <Pagination.Item>{19}</Pagination.Item>
      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationLanding;