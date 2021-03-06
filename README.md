# Leaflet Homework - Visualizing Data with Leaflet

## Background

Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.

### Visualization

![2-BasicMap](Images/2-BasicMap.png)

My task was to visualize an earthquake data set.

1. **Get the data set**

   ![3-Data](Images/3-Data.png)

   The USGS provides earthquake data in a number of different formats, updated every 5 minutes. I visited the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and picked a data set to visualize. The JSON of this data can be seen [here](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson)

   ![4-JSON](Images/4-JSON.png)

2. **Import & Visualize the Data**

   I created a map using Leaflet that plots all of the earthquakes from my data set based on their longitude and latitude.

   * My data markers reflect the magnitude of the earthquake by their size and and depth of the earth quake by color. Earthquakes with higher magnitudes appear larger and earthquakes with greater depth appear darker in color.

   * I included popups that provide additional information about the earthquake when a marker is clicked.

   * I created a legend that will provide context for your map data.

