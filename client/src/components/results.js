import React, { Component } from 'react'

export default class Results extends Component 
{
  constructor(props) 
  {
    super(props)
  }

  render() 
  {
    return (
            <div id="results" class="background-2 custom-margin-top shadow p-3 mb-5 rounded">
                <ul class="list-group">
				  <li class="list-group-item">Cras justo odio</li>
				  <li class="list-group-item">Dapibus ac facilisis in</li>
				  <li class="list-group-item">Morbi leo risus</li>
				  <li class="list-group-item">Porta ac consectetur ac</li>
				  <li class="list-group-item">Vestibulum at eros</li>
				</ul>
            </div>
        )
  }
}