import BookList from "../../../../components/booklist";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params,}: { params: Promise<{ id: string }>; }) { 
  const {id} = await params;
  return {
    title: id,
  };
}


export default async function BookListPage({ params,}: { params: Promise<{ id: string }>; }) { 
  const { id } = await params;
  return (
    <div>
      <BookList id={id}></BookList>
    </div>
  );
}

export const runtime = "edge";