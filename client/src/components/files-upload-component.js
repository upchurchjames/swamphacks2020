import React, { Component } from 'react';
import axios from 'axios';

export default class FilesUploadComponent extends Component 
{
    constructor(props) 
    {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = 
        {
            imgCollection: ''
        }
    }

    onFileChange(e) 
    {
        this.setState({ imgCollection: e.target.files })
    }

    onSubmit(e) 
    {
        e.preventDefault()

        var formData = new FormData();
        for (const key of Object.keys(this.state.imgCollection)) 
        {
            formData.append('imgCollection', this.state.imgCollection[key])
        }
        axios.post("http://localhost:34521/images/", formData, 
        {
        }).then(res => {
            console.log(res.data)
        })
    }

    render() 
    {
        return (
                    <form onSubmit={this.onSubmit}>
                        <div class="custom-file custom-padding-top custom-margin-top">
                            <input type="file" class="custom-file-input form-control-sm" id="customFile" name="imgCollection" onChange={this.onFileChange} multiple />
                            <label class="custom-file-label col-form-label-sm" for="customFile">Choose file</label>
                        </div>
                        <div className="form-group">
                            <button class="background-1 btn btn-primary" type="submit">Get Recipes</button>
                        </div>
                    </form>
        )
    }
}