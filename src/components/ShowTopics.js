import React from 'react'
import { Avatar } from 'antd';
import { Link } from 'react-router-dom'

class ShowTopics extends React.Component {
  render(){
    let {data} = this.props;
		let tabs = {
			ask: '问答',
			job: '招聘',
			share: '分享'
		}
    return(
      <div className="topics">
        {
					data.length===0 ? <div style={{textAlign: 'center'}}><h1>加载中...</h1></div> :
					data.map(item=>(
						<div key={item.id} className='topic'>
							<Link to={`/user/${item.author.loginname}`}><Avatar shape="square" src={item.author.avatar_url} /></Link>
							<div style={{marginLeft: '10px'}}>
								<h3 title={item.title}><Link to={`/topic/${item.id}`}>{item.title}</Link></h3>
								<span className='tab'>{item.top?'置顶':item.good?'精华':tabs[item.tab]}</span>
								<span>回复量：<strong>{item.reply_count}</strong></span>
								&nbsp;&nbsp;
								<span>阅读量：<strong>{item.visit_count}</strong></span>
							</div>
						</div>
					))
				}
      </div>
    )
  }
}

export default ShowTopics
