import "./online.css";

function Online({ user }) {
  return (
    <li className="frindItem">
      <div className="rightbarImageContiner">
        <img src={user.profilePicture} alt="" />
        <span className="rightOnline"></span>
      </div>
      <span className="rithtText">{user.username}</span>
    </li>
  );
}

export default Online;
