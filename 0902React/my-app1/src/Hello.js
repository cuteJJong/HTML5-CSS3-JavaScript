import { Link } from "react-router-dom";

export default function Hello() {
  return (
    <div>
      <h2>user home</h2>
      <Link to="/member/join">회원가입</Link> |
      <Link to="/member/login">로그인</Link>
    </div>
  )
}