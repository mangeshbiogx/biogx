import react ,{ useEffect } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import TreeView from 'react-treeview';
import 'react-treeview/react-treeview.css';

function Filedir() {
    
    const dataSource = [
        {
          name: 'CE-IVD & LUO Documents',
          collapsed: false,
          chain: [
            {name: 'Instructions For Use Manual & Product Inserts', chain:[{name:'400-002-C-MAX'},{name:'400-003-C-MAX'}], collapsed: false},
            {name: 'SDS', chain:[{name:'SYNDROMIC MULTIPLEXES - FOR RESEARCH USE ONLY',chain:[{name:'450-002',name:'450-001'}]}], collapsed: false},
          ],
        },
      ];

      const handleClick = (name,chain) => {
        console.log(name,chain)
        let chain_name = name;
        let folderdata = chain;
        let htmldata = [];
        if(folderdata) {
            htmldata = folderdata.map((folder, i) => {
            
             return (`<div class="card file-manager-item folder">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="customCheck1" />
                        <label class="form-check-label" for="customCheck1"></label>
                    </div>
                    <div class="card-img-top file-logo-wrapper">
                        <div class="dropdown float-end">
                            <i data-feather="more-vertical" class="toggle-dropdown mt-n25"></i>
                        </div>
                        <div class="d-flex align-items-center justify-content-center w-100 mt-3">
                            <i class="fa fa-folder-o fa-3x"></i>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="content-wrapper">
                            <p class="card-text file-name mb-0">`+folder.name+`</p>
                            <p class="card-text file-size mb-0">2gb</p>
                            <p class="card-text file-date">01 may 2019</p>
                        </div>
                        <small class="file-accessed text-muted">Last accessed: 21 hours ago</small>
                    </div>
                </div>`)
                
            })
        }
        

        document.getElementById("mainFolderListName").innerHTML = name;
        document.getElementById("mainFolderList").innerHTML = htmldata.join("");
      }

    return (
    
    <>
        <div className='page-content file-manager-application' style={{width:"100%"}}>
            <div className='content-area-wrapper'>
                <div className="sidebar-left mt-6">
                    <div className="sidebar">
                        <div className="sidebar-file-manager">
                            <div className="sidebar-inner"> 
                                <div className="sidebar-list">
                                    <div className="list-group">
                                    
                                        <a href="#" className="list-group-item list-group-item-action active">
                                            <i data-feather="star" className="me-50 font-medium-3"></i>
                                            <span className="align-middle">CE-IVD & LUO Documents</span>
                                        </a>

                                        {dataSource.map((node, i) => {
                                            const type = node.name;
                                            const label = <span className="node" onClick={()=>handleClick(node.name,node.chain)}>{type}</span>;
                                            return (
                                                <TreeView key={type + '|' + i} nodeLabel={label} defaultCollapsed={false} >
                                                {node.chain.map(chain2 => {
                                                    const label2 = <span className="node"  onClick={()=>handleClick(chain2.name,chain2.chain)}>{chain2.name}</span>;
                                                    return (
                                                    <TreeView nodeLabel={label2} key={chain2.name} defaultCollapsed={true}>
                                                        {chain2.chain.map(chain3 => {
                                                            const label2 = <span className="node"  onClick={()=>handleClick(chain3.name,chain3.chain)}>{chain3.name}</span>;
                                                            return (
                                                            <TreeView nodeLabel={label2} key={chain3.name} defaultCollapsed={true}>
                                                                 
                                                            </TreeView>
                                                            );
                                                        })}
                                                         
                                                    </TreeView>
                                                    );
                                                })}
                                                </TreeView>
                                            );
                                        })}

                                        
                                         
                                        
                                    </div>
                                     
                                
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className='content-right'>
                    <div className="file-manager-main-content">

                        <div className="file-manager-content-header d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center" style={{width:"100%",border:"1px solid #ddd"}}>
                                <div className="sidebar-toggle d-block d-xl-none float-start align-middle ms-1">
                                    <i data-feather="menu" className="font-medium-5"></i>
                                </div>
                                <div className="input-group input-group-merge shadow-none m-0 flex-grow-1">
                                    <span className="input-group-text border-0" style={{borderRadius:"0px"}}>
                                        <i class="fa fa-search"></i>
                                    </span>
                                    <input type="text" className="form-control files-filter border-0 bg-transparent" placeholder="Search" />
                                </div>

                                <button className='btn btn-theme '>Search</button>
                            </div>
                            <div className="d-flex align-items-center">
                            <div className="file-actions">
                                <i data-feather="arrow-down-circle" className="font-medium-2 cursor-pointer d-sm-inline-block d-none me-50"></i>
                                <i data-feather="trash" className="font-medium-2 cursor-pointer d-sm-inline-block d-none me-50"></i>
                                <i
                                data-feather="alert-circle"
                                className="font-medium-2 cursor-pointer d-sm-inline-block d-none"
                                data-bs-toggle="modal"
                                data-bs-target="#app-file-manager-info-sidebar"
                                ></i>
                                <div className="dropdown d-inline-block">
                                <i
                                    className="font-medium-2 cursor-pointer"
                                    data-feather="more-vertical"
                                    role="button"
                                    id="fileActions"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                </i>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="fileActions">
                                    <a className="dropdown-item" href="#">
                                    <i data-feather="move" className="cursor-pointer me-50"></i>
                                    <span className="align-middle">Open with</span>
                                    </a>
                                    <a
                                    className="dropdown-item d-sm-none d-block"
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#app-file-manager-info-sidebar"
                                    >
                                    <i data-feather="alert-circle" className="cursor-pointer me-50"></i>
                                    <span className="align-middle">More Options</span>
                                    </a>
                                    <a className="dropdown-item d-sm-none d-block" href="#">
                                    <i data-feather="trash" className="cursor-pointer me-50"></i>
                                    <span className="align-middle">Delete</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                    <i data-feather="plus" className="cursor-pointer me-50"></i>
                                    <span className="align-middle">Add shortcut</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                    <i data-feather="folder-plus" className="cursor-pointer me-50"></i>
                                    <span className="align-middle">Move to</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                    <i data-feather="star" className="cursor-pointer me-50"></i>
                                    <span className="align-middle">Add to starred</span>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                    <i data-feather="droplet" className="cursor-pointer me-50"></i>
                                    <span className="align-middle">Change color</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">
                                    <i data-feather="download" className="cursor-pointer me-50"></i>
                                    <span className="align-middle">Download</span>
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className="btn-group view-toggle ms-50" role="group">
                                        
                            </div>
                            </div>
                        </div>
                        

                        <div className="file-manager-content-body">
                            
                           
                            <h4 id='mainFolderListName' className="files-section-title mb-75">CE-IVD & LUO Documents</h4>
                            
                            <div className="view-container" id='mainFolderList'>
                                <div class="card file-manager-item folder">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="customCheck1" />
                                        <label class="form-check-label" for="customCheck1"></label>
                                    </div>
                                    <div class="card-img-top file-logo-wrapper">
                                        <div class="dropdown float-end">
                                            <i data-feather="more-vertical" class="toggle-dropdown mt-n25"></i>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center w-100 mt-3">
                                            <i class="fa fa-folder-o fa-3x"></i>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="content-wrapper">
                                            <p class="card-text file-name mb-0">Instructions For Use Manual & Product Inserts</p>
                                            <p class="card-text file-size mb-0">2gb</p>
                                            <p class="card-text file-date">01 may 2019</p>
                                        </div>
                                        <small class="file-accessed text-muted">Last accessed: 21 hours ago</small>
                                    </div>
                                </div>

                                <div class="card file-manager-item folder">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="customCheck1" />
                                        <label class="form-check-label" for="customCheck1"></label>
                                    </div>
                                    <div class="card-img-top file-logo-wrapper">
                                        <div class="dropdown float-end">
                                            <i data-feather="more-vertical" class="toggle-dropdown mt-n25"></i>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-center w-100 mt-3">
                                            <i class="fa fa-folder-o fa-3x"></i>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <div class="content-wrapper">
                                            <p class="card-text file-name mb-0">SDS</p>
                                            <p class="card-text file-size mb-0">2gb</p>
                                            <p class="card-text file-date">01 may 2019</p>
                                        </div>
                                        <small class="file-accessed text-muted">Last accessed: 21 hours ago</small>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="view-container d-none">
                            <h6 className="files-section-title mt-2 mb-75">Files</h6>
                            <div className="card file-manager-item file">
                                <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="customCheck7" />
                                <label className="form-check-label" for="customCheck7"></label>
                                </div>
                                <div className="card-img-top file-logo-wrapper">
                                <div className="dropdown float-end">
                                    <i data-feather="more-vertical" className="toggle-dropdown mt-n25"></i>
                                </div>
                                <div className="d-flex align-items-center justify-content-center w-100">
                                    <img src="https://pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template/demo-1/images/icons/jpg.png" alt="file-icon" height="35" />
                                </div>
                                </div>
                                <div className="card-body">
                                <div className="content-wrapper">
                                    <p className="card-text file-name mb-0">Profile.jpg</p>
                                    <p className="card-text file-size mb-0">12.6mb</p>
                                    <p className="card-text file-date">23 may 2019</p>
                                </div>
                                <small className="file-accessed text-muted">Last accessed: 3 hours ago</small>
                                </div>
                            </div>
                            <div className="card file-manager-item file">
                                <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="customCheck8" />
                                <label className="form-check-label" for="customCheck8"></label>
                                </div>
                                <div className="card-img-top file-logo-wrapper">
                                <div className="dropdown float-end">
                                    <i data-feather="more-vertical" className="toggle-dropdown mt-n25"></i>
                                </div>
                                <div className="d-flex align-items-center justify-content-center w-100">
                                    <img src="https://pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template/demo-1/images/icons/doc.png" alt="file-icon" height="35" />
                                </div>
                                </div>
                                <div className="card-body">
                                <div className="content-wrapper">
                                    <p className="card-text file-name mb-0">account.doc</p>
                                    <p className="card-text file-size mb-0">82kb</p>
                                    <p className="card-text file-date">25 may 2019</p>
                                </div>
                                <small className="file-accessed text-muted">Last accessed: 23 minutes ago</small>
                                </div>
                            </div>
                            <div className="card file-manager-item file">
                                <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="customCheck9" />
                                <label className="form-check-label" for="customCheck9"></label>
                                </div>
                                <div className="card-img-top file-logo-wrapper">
                                <div className="dropdown float-end">
                                    <i data-feather="more-vertical" className="toggle-dropdown mt-n25"></i>
                                </div>
                                <div className="d-flex align-items-center justify-content-center w-100">
                                    <img src="https://pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template/demo-1/images/icons/txt.png" alt="file-icon" height="35" />
                                </div>
                                </div>
                                <div className="card-body">
                                <div className="content-wrapper">
                                    <p className="card-text file-name mb-0">notes.txt</p>
                                    <p className="card-text file-size mb-0">54kb</p>
                                    <p className="card-text file-date">01 may 2019</p>
                                </div>
                                <small className="file-accessed text-muted">Last accessed: 43 minutes ago</small>
                                </div>
                            </div>
                            <div className="card file-manager-item file">
                                <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="customCheck10" />
                                <label className="form-check-label" for="customCheck10"></label>
                                </div>
                                <div className="card-img-top file-logo-wrapper">
                                <div className="dropdown float-end">
                                    <i data-feather="more-vertical" className="toggle-dropdown mt-n25"></i>
                                </div>
                                <div className="d-flex align-items-center justify-content-center w-100">
                                    <img src="https://pixinvent.com/demo/vuexy-bootstrap-laravel-admin-template/demo-1/images/icons/json.png" alt="file-icon" height="35" />
                                </div>
                                </div>
                                <div className="card-body">
                                <div className="content-wrapper">
                                    <p className="card-text file-name mb-0">users.json</p>
                                    <p className="card-text file-size mb-0">200kb</p>
                                    <p className="card-text file-date">12 may 2019</p>
                                </div>
                                <small className="file-accessed text-muted">Last accessed: 1 hour ago</small>
                                </div>
                            </div>
                            <div className="d-none flex-grow-1 align-items-center no-result mb-3">
                                <i data-feather="alert-circle" className="me-50"></i>
                                No Results
                            </div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
            </div>
        </div>
    </>

  )
}

export default Filedir