import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'react-bootstrap';
import axios from "axios";
import logoimg from '../img/capital-numbers.png';
import mainData from "../data/mainData.json";
import subDirectoryone from "../data/subDirectoryone.json";
import finalDirectory from "../data/finalDirectory.json";

class Sales extends React.Component {
  constructor() {
    super();
    this.state = {
      id: new Date().toString(),
      appMainDirectory: [],
      mainExpand: false,
      firstExpand: false,
      secondExpand: false,
      secondDirectory: false,
      subDirectory: [],
      finalDirectory: []
    };
    this.setExpand = this.setExpand.bind(this);
    this.firstDirectory = this.firstDirectory.bind(this);
    this.secDirectory = this.secDirectory.bind(this);
    this.directoryTwo = this.directoryTwo.bind(this);
    this.directoryThree = this.directoryThree.bind(this);
  }
  componentDidMount() {
    this.setState({ appMainDirectory: mainData.entries });
    this.setState({ subDirectory: subDirectoryone.entries });
    this.setState({ finalDirectory: finalDirectory.entries });
    this.setState({ mainExpand: false });
    this.setState({ firstExpand: false });
    this.setState({ secondExpand: false });
    this.setState({ secondDirectory: false });
    this.setState({ thirdDirectory: false });
  }
  setExpand = (e) => {
    console.log(mainData, "finaldate");
    const currentStateVal = this.state.mainExpand;
    this.setState({ mainExpand: !currentStateVal });
  }

  firstDirectory = (e) => {
    console.log(mainData, "finaldate");
    const firstExpandVal = this.state.firstExpand;
    this.setState({ firstExpand: !firstExpandVal });
  }

  secDirectory = (e) => {
    const secondExpandVal = this.state.secondExpand;
    this.setState({ secondExpand: !secondExpandVal });
  }

  directoryTwo = (e) => {
    const seconddirVal = this.state.secondDirectory;
    this.setState({ secondDirectory: !seconddirVal });
  }

  directoryThree = (e) => {
    const thirdDirVal = this.state.thirdDirectory;
    this.setState({ thirdDirectory: !thirdDirVal });
  }

  render() {
    const appMaininitData = this.state.appMainDirectory;
    const mainSubinitData = this.state.subDirectory;
    const finalSubinitData = this.state.finalDirectory;
    const finalInitData = finalSubinitData.map((finData) => {
      if (finData.name == "directory-1aA") {
        return (<div className="final-directory-right"><div className="finalDirectory">{finData.name}</div>
          <div className="lastMsg">{"... (other files and directories inside this directory) ..."}</div></div>)
      }
    });
    const finalInitDataVal = finalSubinitData.map((finData) => {
      if (finData.type == "file") {
        return (<div className="fileDirectory">{finData.name}</div>)
      }
    });
    const directorInitData = mainSubinitData.map((subData) => {
      if (subData.name == "directory-1a") {
        return (<div onClick={this.secDirectory} className="sub-directory-right"><div className="subDirectory">{subData.name}</div>
          {finalInitData}
          {finalInitDataVal}
        </div>)
      }
    });
    const directoryRows = appMaininitData.map((dataList) => {
      if (dataList.name == "directory-1") {
        return (<div onClick={this.firstDirectory} className="directory-right"><div className="onlyDirectory">{dataList.name}</div>
          {this.state.firstExpand ? directorInitData : null}
        </div>)
      }
    });
    const directorytwo = appMaininitData.map((dataList) => {
      if (dataList.name == "directory-2") {
        return (<div onClick={this.directoryTwo} className="directory-two"><div className="onlyDirectory">{dataList.name}</div>
          {this.state.secondDirectory ? <div className="lastMsg">{"... (other files and directories inside this directory) ..."}</div> : null}
        </div>)
      }
    });
    const directorythree = appMaininitData.map((dataList) => {
      if (dataList.name == "directory-3") {
        return (<div onClick={this.directoryThree} className="directory-three"><div className="onlyDirectory">{dataList.name}</div>
          {this.state.thirdDirectory ? <div className="lastMsg">{"... (other files and directories inside this directory) ..."}</div> : null}
        </div>)
      }
    });
    const nonDirectoryRows = appMaininitData.map((dataList) => {
      if (dataList.type == "file")
        return (<div className="non-directory-right"><div className="nonDirectory">{dataList.name}</div></div>)
    });
    return (
      <>
        <Navbar bg="primary" variant="dark" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
          <img alt="logo" src={logoimg} width="200px" height="42px"
            className="navbar-brand" />
          <div className="navbar-nav navbar-center" style={{ color: "white", fontSize: "x-large" }}>Capital Route Dashboard</div>
        </Navbar>
        <div onClick={this.setExpand} className={"triangle-right " + this.state.mainExpand}></div> <p className="routeVal">root</p>
        {this.state.mainExpand ? <div>{directoryRows}
          {directorytwo}
          {directorythree}
          {nonDirectoryRows}</div> : null}
      </>
    );
  }
}

export default Sales;