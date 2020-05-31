import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module-react';
import Cookies from'js-cookie'
import { connect } from 'react-redux'
Quill.register('modules/imageResize', ImageResize)
Quill.register('modules/imageDrop', ImageDrop);

class NewBlog extends React.Component {
    constructor (props) {
      super(props)
      this.state = { NewBlogHtml: '', theme: 'snow' , title: ''}
      this.handleChange = this.handleChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.setTitle = this.setTitle.bind(this)
    }
    
    handleChange (html) {
        this.setState({ NewBlogHtml: html });
    }
    setTitle (title) {
      this.setState({ title: title });
      console.log(this.state.title)

  }
    
    handleThemeChange (newTheme) {
      if (newTheme === "core") newTheme = null;
      this.setState({ theme: newTheme })
    }

    onSubmit (event){
      event.preventDefault();
      console.log(this.state.NewBlogHtml)
      const data ={
        content :this.state.NewBlogHtml,
        title: this.state.title,
        user : this.props.userData.id,
        description:'sample'
      }

      axios.post('http://localhost:8000/blog/', data,      {
        headers: {
            'Content-Type': 'application/json'
        }}
)
.then(res => {
  console.log(res);
  console.log(res.data);
  this.props.history.push('/')
}).catch(error => {
  console.log(error.response);
})
}
    
    render () {
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            <p>Title</p><input placeholder="Put a Title." onChange={(e) => this.setTitle(e.target.value)} label='title'></input><br /><br /><br />
          <ReactQuill 
            theme={this.state.theme}
            onChange={this.handleChange}
            value={this.state.NewBlogHtml}
            modules={NewBlog.modules}
            formats={NewBlog.formats}
            bounds={'.app'}
            placeholder={this.props.placeholder}
           />
          <div className="themeSwitcher">
            <label>Theme </label>
            <select onChange={(e) => 
                this.handleThemeChange(e.target.value)}>
              <option value="snow">Snow</option>
              <option value="bubble">Bubble</option>
              <option value="core">Core</option>
            </select>
          </div>
          
                <div style={{ textAlign: 'center', margin: '2rem', }}>
                    <button
                        size="large"
                        htmlType="submit"
                        className=""
                        onSubmit={this.onSubmit}
                    >
                        Submit
                </button>
                </div>
            </form>
         </div>
       )
    }
  }
  
  /* 
   * Quill modules to attach to NewBlog
   * See https://quilljs.com/docs/modules/ for complete options
   */
  NewBlog.modules = {
    imageResize: {
      handleStyles: {
        backgroundColor: 'black',
        border: 'none',
        color: 'white',
      },
      modules: ['Resize', 'DisplaySize', 'Toolbar'],
    },
  imageDrop: true,
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill NewBlog formats
   * See https://quilljs.com/docs/formats/
   */
  NewBlog.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
  

const mapStateToProps = state => {
    return {
      userData: state.userData
    }
  }


export default connect(mapStateToProps)(NewBlog);