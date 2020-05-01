// import React from 'react';
// import CKNewBlog from '@ckNewBlog/ckNewBlog5-react';
// import ClassicNewBlog from '@ckNewBlog/ckNewBlog5-build-classic';


// class NewBlog extends React.Component {
//     render() {
//         return (
//             <div className="App">
//                 <h2>Create Blog!</h2>
//                 <CKNewBlog

//                     NewBlog={ ClassicNewBlog }
//                     data="<p>Type your content here...</p>"
//                     onInit={ NewBlog => {
//                         // You can store the "NewBlog" and use when it is needed.
//                         console.log( 'NewBlog is ready to use!', NewBlog );
//                     } }
//                     onChange={ ( event, NewBlog ) => {
//                         const data = NewBlog.getData();
//                         console.log( { event, NewBlog, data } );
//                     } }
//                     onBlur={ ( event, NewBlog ) => {
//                         console.log( 'Blur.', NewBlog );
//                     } }
//                     onFocus={ ( event, NewBlog ) => {
//                         console.log( 'Focus.', NewBlog );
//                     } }
//                 />
//             </div>
//         );
//     }
// }


// export default NewBlog;
import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { ImageDrop } from 'quill-image-drop-module';
import ImageResize from 'quill-image-resize-module-react';
import Cookies from'js-cookie'
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
      Cookies.get('username')
      const data ={
        content :this.state.NewBlogHtml,
        title: this.state.title,
        username : Cookies.get('username')
      }

      axios.post('http://localhost:8000/create/', data,      {
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
  
  /* 
   * PropType validation
   */
  /* 
   * Render component on page
   */
export default NewBlog;