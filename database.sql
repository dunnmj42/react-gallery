--DATABASE NAME react_gallery

CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(255) NOT NULL,
	"likes" INT DEFAULT 0,
	"description" VARCHAR(255)
);

INSERT INTO "gallery" ("path", "description")
VALUES ('images/butterfly.jpeg', 'Image of a butterfly from the Como Zoo'),
('images/fallsrain.jpeg', 'Image of a waterfall in the rain'),
('images/goat.jpeg', 'Image of a goat from an apple orchard'),
('images/fallsth.jpeg', 'Image of a waterfall in Two Harbors'),
('images/sylvanrocks.jpeg', 'Image of rocks at Sylvan Lake, SD'),
('images/maroonbells.jpeg', 'Image ofa mountain lake at Maroon Bells, CO'),
('images/hanginglake.jpeg', 'Image of a Waterfall at Hanging Lake, CO'),
('images/waterfallshore.jpeg', 'Image of a waterfall near the North Shore'),
('images/mesa.jpeg', 'Image of a Mesa from western Colorado'),
('images/fallenrock.jpeg', 'Image of a fallen rock sign from Utah'),
('images/badlands.jpeg', 'Image of the Badlands in Western SD'),
('images/mpls.jpeg', 'Image of the Minneapolis skyline from rooftop'),
('images/riverskyline.jpeg', 'Image of skyline from the Chicago River'),
('images/flower.jpeg', 'Image of a flower from the Arboretum'),
('images/pond.jpeg', 'Image of a pond from the Arboretum')
