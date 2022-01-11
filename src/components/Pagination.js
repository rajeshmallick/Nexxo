import React, { Component } from "react";

export class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.totalPage !== prevProps.totalPage) {
      this.setState({ currentPage: this.props.totalPage >= 1 ? 1 : 0 });
    }
  }

  prevandnext(value) {
    if (value === "prev") {
      this.props.pageChange(this.state.currentPage - 2);
      this.setState({ currentPage: this.state.currentPage - 1 });
    } else if (value === "next") {
      this.props.pageChange(this.state.currentPage);
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  }

  render() {
    return (
      <div>
        {console.log(this.props)}
        <div className="pagination">
          <div
            className="prev"
            onClick={() => {
              if (this.state.currentPage === 1) return;
              this.prevandnext("prev");
            }}
          >
            &#8592; Prev
          </div>
          {this.state.currentPage > 0 &&
            Array.from(Array(this.props.totalPage).keys()).map((val, index) => (
              <div
                className={`count ${
                  this.state.currentPage === val + 1 ? "active" : ""
                }`}
                onClick={() => {
                  this.setState({ currentPage: val + 1 });
                  this.props.pageChange(val);
                }}
                key={index}
              >
                {val + 1}
              </div>
            ))}

          <div
            className="next"
            onClick={() => {
              if (this.state.currentPage === this.props.totalPage) return;
              this.prevandnext("next");
            }}
          >
            Next &#8594;
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;
