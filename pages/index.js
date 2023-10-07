import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.orientalescape.com/images/laos/header/1900x800/activities01.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m1",
    title: "A Second Meetup",
    image:
      "https://www.orientalescape.com/images/laos/header/1900x800/interest01.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
