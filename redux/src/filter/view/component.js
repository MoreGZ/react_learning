import React, { Component } from 'react'
import Link from './link';

class Filter extends Component {
    render(){
        return (
            <p>
                <Link filter="all">全部</Link>
                <Link filter="uncomplete">未完成</Link>
                <Link filter="complete">已完成</Link>
            </p>
        )
    }
}

export default Filter;