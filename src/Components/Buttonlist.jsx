import Button from './Button'

const categories = [
  "All",
  "Music",
  "News",
  "Gaming",
  "Sports",
  "Comedy",
  "Education",
  "Live",
  "Trending",
  "Movies",
  "Tech" 
];

const Buttonlist = () => {
 return (
    <div className="flex">
      {categories.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  )
}

export default Buttonlist