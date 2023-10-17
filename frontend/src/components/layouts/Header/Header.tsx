import './Header.scss'
export const Header = () => {
  return (
    <div>


		<header id="page-topbar">
			<div className="navbar-header">
				<div className="d-flex">
					<div className="navbar-brand-box pe-2">
						<a href="#" className="logo logo-light">
							<span className="logo-lg">
								<img className="w-100" src="assets/img/cloud4c_0.png" alt="" />
							</span>
						</a>
						
					</div>
                  
				</div>

				<div className="d-flex">

 
					<div className="dropdown d-inline-block notifications-mbl">
						<button type="button" className="btn header-item noti-icon icon-link" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<i className="mdi mdi-bell-outline bell-shake"></i>
							<span className="badge bg-danger rounded-pill">42</span>
						</button>
						<div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
							<div className="p-3">
								<div className="row align-items-center">
									<div className="col">
										<h5 className="m-0 font-size-16">Notifications (42)
										</h5>
									</div>
								</div>
							</div>
							<div className="p-2 border-top show-list">
								<div className="d-grid">
									<a className="btn btn-sm btn-link font-size-14 text-center" href="newemployees.html">Show list of Employees </a>
								</div>
							</div>
						</div>
					</div>
					<button type="button" data-bs-toggle="modal" data-bs-target="#settingModal"  className="btn header-item setting-icon icon-link">
						<i className="fe fe-settings settings-icon "></i>
					</button>

					<div className="dropdown d-inline-block">
						<button type="button" className="btn header-item" id="page-header-user-dropdown"
							data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<img className="rounded-circle header-profile-user" src="assets/img/profile.jpg" alt="Header Avatar" />
						</button>
						<div className="dropdown-menu dropdown-menu-end">
							<a className="dropdown-item" href="userprofile.html"><i className="mdi mdi-account-circle font-size-17 align-middle me-1"></i> Profile</a>
							<a className="dropdown-item text-danger" href="#"><i className="mdi mdi-power-settings font-size-17 align-middle me-1"></i>Logout</a>
						</div>
					</div>
 

				</div>
			</div>
 
		</header>
 



<div className="modal right fade" id="settingModal">
	<div className="modal-dialog">
	  <div className="modal-content rounded-0">
		<div className="modal-header p-2 pe-0">
			<h6 className="modal-title">Settings</h6>
		  <button type="button" className="btn-close me-2" data-bs-dismiss="modal"></button>
		</div>
	   
		  <div className="modal-body p-0">
			   <div className="scrollable-container">
			   
				<div className="row w-100 ps-3 pt-3">
					<div className="col-md-12">
					Test
			</div> 
		   </div>
		</div>
 
		</div>  
	  </div>
	</div>
  </div>





 
 




    </div>
  )
}
