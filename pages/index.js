import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://source.unsplash.com/user/c_v_r/1900x800",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m1",
    title: "A Second Meetup",
    image: "https://picsum.photos/1900/800",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
