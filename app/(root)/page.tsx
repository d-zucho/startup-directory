import SearchForm from '../../components/SearchForm'
import StartupCard, { StartupTypeCard } from '@/components/StartupCard'
import { client } from '@/sanity/lib/client'
import { STARTUPS_QUERY } from '@/sanity/lib/queries'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  const posts = await client.fetch(STARTUPS_QUERY)

  // console.log(JSON.stringify(posts, null, 2))

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: 'John Doe' },
  //     _id: 1,
  //     description: 'This is an image',
  //     image:
  //       'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     category: 'Tech',
  //     title: 'Better Keyboards',
  //   },
  // ]

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch your startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed on Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search results for: ${query}` : 'All Startups'}
        </p>

        <ul className='mt-7 card_grid'>
          {/* map over different startups retrieved from Sanity */}

          {/* ignore the following error with:
           */}
          {posts?.length > 0
            ? posts?.map((post: StartupTypeCard) => (
                <StartupCard key={post?._id} post={post} />
              ))
            : ''}
        </ul>
      </section>
    </>
  )
}
