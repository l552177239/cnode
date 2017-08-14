import React from 'react'
import axios from 'axios'
import { Card, message } from 'antd'
import { connect } from 'react-redux'

import { url } from '../config'
import Form from './Form'

class NewTopic extends React.Component {
  handleSubmit(data){
    data.accesstoken = this.props.user.accesstoken;
    console.log(data);
    axios.post(`${url}/topics`, data)
      .then(res=>{
        message.success('发布话题成功')
        this.props.history.push(`/topic/${res.data.topic_id}`)
      })
      .catch(err=>message.error('发布话题失败'))
  }
  render(){
    return(
      <Card style={{margin: '10px'}}>
        <Form onCancel={()=>this.props.history.goBack()} onSubmit={this.handleSubmit.bind(this)}/>
      </Card>
    )
  }
}

let getUser = ({user}) => ({user})

export default connect(getUser)(NewTopic)
