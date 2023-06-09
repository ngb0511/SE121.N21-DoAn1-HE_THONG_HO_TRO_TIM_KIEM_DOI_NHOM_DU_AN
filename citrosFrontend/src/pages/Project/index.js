import classNames from 'classnames/bind';
import styles from './Project.module.scss';
import * as projectServices from '../../apiServices/projectItemServices';
import Paginate from '../../components/Paginate';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Project() {
  const [active, setActive] = useState('1');
  const handleClick = (event) => {
    setActive(event.target.id);

    const fetchApi = async () => {
      var userEx = JSON.parse(sessionStorage.getItem('userLogin'));
      console.log(event.target.id);
      if (event.target.id === '1') {
        const result = await projectServices.getAllJoinedProject(userEx.userID);
        console.log(event.target.id);
        setproject(result);
      } else if (event.target.id === '2') {
        const result = await projectServices.getFinishedProject(userEx.userID);
        console.log(result);
        setproject(result);
      } else if (event.target.id === '3') {
        const result = await projectServices.getUnfinishedProject(userEx.userID);
        console.log(result);
        setproject(result);
      } else if (event.target.id === '4') {
        const result = await projectServices.getOwnedProject(userEx.userID);
        console.log(result);
        setproject(result);
      }
      //var account = JSON.parse(sessionStorage.getItem('account'));
    };
    fetchApi();
  };
  const [project, setproject] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      var userEx = JSON.parse(sessionStorage.getItem('userLogin'));
      //console.log(active);
      const result = await projectServices.getAllJoinedProject(userEx.userID);
      console.log(result);
      setproject(result);
      //var account = JSON.parse(sessionStorage.getItem('account'));
    };
    fetchApi();
  }, []);
  /*return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('header')}>
          <ul className={cx('header-cointainer')}>
            <li className={cx('header-item')}>
              <div id={cx('i1')} className={cx('img')}></div>
              <h3>Tạo dự án của riêng bạn</h3>
              <p>Khởi tạo dự án và tìm kiếm đồng đội ngay bây giờ</p>
              <Button id="btn" regular to="/CreateProject">
                Xem
              </Button>
            </li>
            <li className={cx('header-item')}>
              <div id={cx('i2')} className={cx('img')}></div>
              <h3>Tìm kiếm dự án phù hợp</h3>
              <p>Khởi tạo dự án và tìm kiếm đồng đội ngay bây giờ</p>
              <Button id="btn" regular to="/Home">
                Xem
              </Button>
            </li>
            <li className={cx('header-item')}>
              <div id={cx('i3')} className={cx('img')}></div>
              <h3>Thống kế </h3>
              <p>Tổng hợp thông tin thành tích của bản thân</p>
              <Button id="btn" regular to="/Statistic">
                Xem
              </Button>
            </li>
          </ul>
        </div>
        <div className={cx('body')}>
          <h2>Dự án đã tham gia</h2>
          <div className={cx('nav')}>
            <button key={1} className={active === '1' ? cx('active') : cx('nav-btn')} id={'1'} onClick={handleClick}>
              Tất cả
            </button>
            <button key={2} className={active === '2' ? cx('active') : cx('nav-btn')} id={'2'} onClick={handleClick}>
              Đã hoàn thành
            </button>
            <button key={3} className={active === '3' ? cx('active') : cx('nav-btn')} id={'3'} onClick={handleClick}>
              Chưa hoàn thành
            </button>
          </div>
          <div className={cx('project')}>
            <Paginate numItems={6} list={project} />
          </div>
        </div>
      </div>
    </div>
  );*/

  //Test project
  // const projectDropDown = [
  //   {
  //     projectID: '0',
  //     projectName: 'tesy',
  //     projectOwner: 'test',
  //     description:
  //       'terrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrr r r r r r r rr r r r r r rr r r r r r r rr r rr r r r rr r r r r r rr r r r r r  rr   r r r r r r rrrrrrrrrrrrrrrrrrrrrrrrrrrrrasfasfasfasfasfa  a asd ad as das d as d as d as d as d asdasrrrrrrrrrrst',
  //     startTime: '0/0/2000',
  //     endTime: '0/0/2000',
  //     maxParticipantAmount: '5',
  //     gitHubLink: '1512512522222222222222222222222222',
  //   },
  //   {
  //     projectID: '0',
  //     projectName: 'tesy',
  //     projectOwner: 'test',
  //     description:
  //       'te  qwrqwrrrrrr rrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrr r r r r r r rr r r r r r rr r r r r r r rr r rr r r r rr r r r r r rr r r r r r  rr   r r r r r r rrrrrrrrrrrrrrrrrrrrrrrrrrrrrasfasfasfasfasfa  a asd ad as das d as d as d as d as d asdasrrrrrrrrrrst',
  //     startTime: '0/0/2000',
  //     endTime: '0/0/2000',
  //     maxParticipantAmount: '5',
  //     gitHubLink: '1512512522222222222222222222222222',
  //   },
  //   {
  //     projectID: '0',
  //     projectName: 'tesy',
  //     projectOwner: 'test',
  //     description:
  //       'te  qwrqwrrrrrr rrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrr r r r r r r rr r r r r r rr r r r r r r rr r rr r r r rr r r r r r rr r r r r r  rr   r r r r r r rrrrrrrrrrrrrrrrrrrrrrrrrrrrrasfasfasfasfasfa  a asd ad as das d as d as d as d as d asdasrrrrrrrrrrst',
  //     startTime: '0/0/2000',
  //     endTime: '0/0/2000',
  //     maxParticipantAmount: '5',
  //     gitHubLink: '1512512522222222222222222222222222',
  //   },
  //   {
  //     projectID: '0',
  //     projectName: 'tesy',
  //     projectOwner: 'test',
  //     description:
  //       'te  qwrqwrrrrrr rrrrrrrrr  rrrrrrrrrrrrrrrrrrrrrrr r r r r r r rr r r r r r rr r r r r r r rr r rr r r r rr r r r r r rr r r r r r  rr   r r r r r r rrrrrrrrrrrrrrrrrrrrrrrrrrrrrasfasfasfasfasfa  a asd ad as das d as d as d as d as d asdasrrrrrrrrrrst',
  //     startTime: '0/0/2000',
  //     endTime: '0/0/2000',
  //     maxParticipantAmount: '5',
  //     gitHubLink: '1512512522222222222222222222222222',
  //   },
  // ];
  return (
    <div className={cx('wrapper')}>
      <div className={cx('project-cointainer')}>
        <div className={cx('work-list')}>
          <h2>Your Project Report</h2>
          <div className={cx('nav')}>
            <button key={1} className={active === '1' ? cx('active') : cx('nav-btn')} id={'1'} onClick={handleClick}>
              All
            </button>
            <button key={2} className={active === '2' ? cx('active') : cx('nav-btn')} id={'2'} onClick={handleClick}>
              Completed
            </button>
            <button key={3} className={active === '3' ? cx('active') : cx('nav-btn')} id={'3'} onClick={handleClick}>
              In Progress
            </button>
            <button key={4} className={active === '4' ? cx('active') : cx('nav-btn')} id={'4'} onClick={handleClick}>
              Owned
            </button>
          </div>
          <Paginate numItems={6} list={project} />
        </div>
      </div>
    </div>
  );
}

export default Project;
