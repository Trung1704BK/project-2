import React from 'react';

class MyData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      //
      posts: [
        { id: 1, name: 'Math' },
        { id: 1, name: 'Japan' },
        { id: 1, name: 'New' },
      ],
      //
      job: '',
      jobs: [],
    };
  }
  handleShowHide = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  //
  handleChange = (e) => {
    this.setState({
      job: e.target.value,
    });
  };
  //
  handleAdd = () => {
    if (this.state.job === '') {
      return;
    }
    this.state.jobs.push(this.state.job);
    this.setState({
      job: '',
    });
  };
  //
  handleDelete = (id) => {
    const deleteTask = [...this.state.jobs];
    deleteTask.splice(id, 1);
    this.setState({
      jobs: deleteTask,
    });
  };

  render() {
    const { job, jobs } = this.state;
    return (
      <div>
        <button onClick={() => this.handleShowHide()}>ShowHide</button>
        <div>{this.state.toggle ? <h1>Trung</h1> : null}</div>
        <div>
          {this.state.posts.map((post) => {
            return <h1>{post.name}</h1>;
          })}
        </div>
        <div>
          <input value={job} onChange={(e) => this.handleChange(e)} />
          <button onClick={() => this.handleAdd()}>Add</button>
          {jobs.map((job, id) => {
            return (
              <div key={job.id}>
                <div>
                  {job}

                  <i
                    class='fa-solid fa-trash-can'
                    style={{ cursor: 'pointer' }}
                    onClick={() => this.handleDelete(id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MyData;
