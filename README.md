# PITCH
As a food blogger, I want to be able to show off my work and recipes. I have a lot of amazing pics from the recipes i’ve created I'd like to share with potential clients, but I need a site that is more professional than Instagram in order to do so. I don’t have time or skills to build my own unique website, I need a site that provides templates so I can just input some information and be done.

# MVP
This app contains two user types. A professional chef (who has the ability to log in) and a single user (no need to log in so no need for user data to be persisted on this user type) who can view portfolios.
- Onboarding process for a professional chef. Include their location and contact info for people to reach them.
- Login Page - After a Chef logs in, they'll be directed to their portfolio page where they can view what they have posted. They can also click to edit or delete posts.
- Create Post Page - Allows a chef to come in and create a post of a new recipe. Each post needs to have an image, and fields for title, meal type (breakfast, lunch, dinner, snack, dessert), ingredients, and instructions.  (You can hard code the image in for MVP-no need to upload photos for MVP. Stretch goals will include image uploading and the use of Cloudinary API etc. )
- Home Page for non-logged in users - Navigating to the home page users can view posts of different chefs laid out in a single format. (see foodgawker.com for example) Users can click on a single post to read the instructions for the recipe. They can filter by recipe title, meal type,  chef, and ingredients.
 
# STRETCH
Build an image uploader into the site to allow users the ability to upload their own pictures. (This will require some work with a package called Drop Zone and a service called cloudinary). Build a video uploader into the site to allow the chef to demo their recipes. 
