

export async function generateStaticParams() {
  const posts = [{ id: '1' }, { id: '2' }, { id: '3' }];
 
  return posts;
}

export default async function PropertyPage({
  params,
}) {
  const { slug } = await params
  return <div>Hello.</div>
}