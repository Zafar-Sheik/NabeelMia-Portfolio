import React, { useState, useEffect } from "react";
import { urlFor, client } from "../client";
import { Image, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const MyWorkScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "posts"]';
    client.fetch(query).then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <Row
      style={{ marginBottom: "60px", marginRight: "20px", marginLeft: "20px" }}
    >
      {posts.map((post, index) => (
        <Col xs={6} sm={4} md={3}>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            key={post.name + index}
          >
            <h2 className="m-2">{post.name}</h2>
            <Image src={urlFor(post.imgUrl)} alt="Failed to Load Image" />
            <h5 className="m-2">{post.caption}</h5>
          </motion.div>{" "}
        </Col>
      ))}
    </Row>
  );
};

export default MyWorkScreen;
