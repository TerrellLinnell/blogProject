import React from 'react';
import $ from 'jquery';
import { Table } from 'react-bootstrap';

var PortfolioComponent = React.createClass({
  getInitialState: function () {
    return {
      repos: [],
      commits: []
    }
  },
  componentWillMount: function () {
    this.getReposFromGitHub();
  },
  getReposFromGitHub: function () {
    var self = this;
    $.ajax({
      url: 'https://api.github.com/users/terrelllinnell/repos',
      method: 'GET'
    }).done(function (data) {
      console.log(data);
      var repos = data.map(function (item) {
        return {name:item.name, url:item.html_url};
      });
      console.log(repos);
      self.setState({repos: repos});
    });
    $.ajax({
      url: 'https://api.github.com/users/terrelllinnell/events',
      method: 'GET'
    }).done(function (data) {
      var commits = data.filter(function (item) {
        return item.type === "PushEvent";
      }).map(function (item) {
        return {
          repo: item.repo.name,
          message: item.payload.commits.map(function (item) {
            return item.message;
          })
        }
      });
      console.log(commits);
      self.setState({commits: commits});
    });
  },
  reposList: function () {
    console.log(this.state.repos);
    return this.state.repos.map(function (item) {
      return (<tr className='ProjectsTitle' key={item.name}> <td> <h4><strong className='repositories'> {item.name} </strong> </h4></td> <td><button className='projectsButton'> <a href={item.url}> click for details </a> </button> </td> </tr> )
    });
  },
  commitsList: function () {
    return this.state.commits.map(function (item) {
      return <li className='ProjectCommits'>{item.repo}: {item.message}</li>
    })
  },
  render: function () {
   return (
    <div>
      <div>
        <h2 className='StoryTitle Title'> <strong> <em> Projects </em> </strong> </h2>
      </div>
      <div>
        <Table>
          {this.reposList()}
        </Table>
      </div>
      <div>
        <h2 className=' StoryTitle Title'> <strong> <em> Latest commits </em> </strong> </h2>
      </div>
      <div>
        <ul>
          {this.commitsList()}
        </ul>
      </div>
    </div>
  );
}

});
export default PortfolioComponent;
