import "./paginate.scss";

const Paginate = () => {
  return (
    <div className="pagination">
      <div>
        <a href="#!">&laquo;</a>
        <a className="active" href="#!">
          1
        </a>
        <a href="#!">2</a>
        <a href="#!">3</a>
        <a href="#!">&raquo;</a>
      </div>
      <div className="page-from">
        გვერდი <span className="current">1</span> / <span>80</span>
      </div>
    </div>
  );
};

export default Paginate;
