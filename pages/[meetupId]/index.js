import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://www.orientalescape.com/images/laos/header/1900x800/activities01.jpg"
      title="A First Meetup"
      address="Some street 123, Some city"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false, // allows to pregenerate dinamically for incoming requests - if it's false will return 404 if the values are different to m1 or m2
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

// It would probably not change a lot of times

export async function getStaticProps(context) {
  // Fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log({ meetupId });

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://www.orientalescape.com/images/laos/header/1900x800/activities01.jpg",
        title: "A First Meetup",
        address: "Some street 123, Some city",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
