

const About = () => {
  return (
    <section className=" py-16 px-4 text-center">
      
      {/* Title */}
      <h2 className=" mb-10 text-2xl font-normal leading-9 text-black">
        About Me, The Food Man
      </h2>

      {/* Image */}
      <div className="flex justify-center mb-10">
        <img
          src="https://www.w3schools.com/w3images/chef.jpg"
          alt="chef"
          className="w-full max-w-3xl object-cover margin-auto display-block"
        />
      </div>

      {/* Content */}
      <div className="w3-container w3-padding-32 w3-center">
        <h3 className=" mb-2">
          I am Who I Am!
        </h3>

        <h6 className="italic">
        <i>With Passion For Real, Good Food</i>
        </h6>

        <p className="text-gray-700 leading-relaxed">
          Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.
        </p>
      </div>

    </section>
  );
};

export default About;