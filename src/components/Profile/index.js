import "./index.css";
const Profile = () => (
  <div className="profile-container">
    <div className="profile-item-container" styles={"shadow"}>
      <h1 className="user-head">Account Settings</h1>

      <div className="all">
        <div className="user-details">
          <div className="img-mini">
            <img
              className="img"
              src="https://tse1.explicit.bing.net/th/id/OIP.uMtNoCmwd0lIykbEZcDwCQHaLH?w=600&h=900&rs=1&pid=ImgDetMain"
              alt="user image"
            />
            <img
              alt="Badge"
              className="badge-icon"
              src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='21'%20height='23'%20viewBox='0%200%2021%2023'%3e%3cg%20id='Group_1585'%20data-name='Group%201585'%20transform='translate(0.229%20-0.182)'%3e%3cellipse%20id='Ellipse_115'%20data-name='Ellipse%20115'%20cx='10.5'%20cy='11.5'%20rx='10.5'%20ry='11.5'%20transform='translate(-0.229%200.182)'%20fill='%236c25ff'/%3e%3cpath%20id='noun-camera-5308825'%20d='M115.254,89.363h-2.169l-.572-1.346a.9.9,0,0,0-.291-.377.7.7,0,0,0-.415-.14h-2.571a.706.706,0,0,0-.4.146.9.9,0,0,0-.282.371l-.591,1.346h-2.169a.733.733,0,0,0-.558.273,1.024,1.024,0,0,0-.231.659v6.521a1.024,1.024,0,0,0,.231.659.733.733,0,0,0,.558.273h9.464a.733.733,0,0,0,.558-.273,1.024,1.024,0,0,0,.231-.659V90.295a1.024,1.024,0,0,0-.231-.659.733.733,0,0,0-.558-.273Zm-4.732,6.52a2.2,2.2,0,0,1-1.673-.818,3.164,3.164,0,0,1,0-3.952,2.119,2.119,0,0,1,3.346,0,3.164,3.164,0,0,1,0,3.952A2.2,2.2,0,0,1,110.522,95.884Zm1.577-2.795a2.046,2.046,0,0,1-.462,1.317,1.413,1.413,0,0,1-2.231,0,2.109,2.109,0,0,1,0-2.635,1.413,1.413,0,0,1,2.231,0A2.046,2.046,0,0,1,112.1,93.089Z'%20transform='translate(-100.248%20-81.086)'%20fill='%23fff'/%3e%3c/g%3e%3c/svg%3e"
              Add
              commentMore
              actions
            />
            <br />
          </div>

          <div className="name-and-email">
            <p className="name"> Marry Doe</p>
            <p className="name">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="user-pera">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <hr
        style={{
          borderTop: "1px dotted gray",
          borderBottom: "none",
          width: "100%",
          marginTop: "50px",
        }}
      />
      <div className="empty">
        <p></p>
      </div>
      <hr
        style={{
          borderTop: "1px dotted gray",
          borderBottom: "none",
          width: "100%",
          marginBottom: "50px",
        }}
      />
    </div>
  </div>
);
export default Profile;
