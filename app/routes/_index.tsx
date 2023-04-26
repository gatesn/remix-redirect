import {Link} from "@remix-run/react";
import {json} from "@remix-run/node";

export const loader = () => {
  return json({hello: 'world'})
}

export default function Index() {
  return <Link to={"/foo"}>To Foo</Link>
}
