const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode;

  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data, curr = this.root()) {
    const node = {data, left: null, right: null};

    if(!this.root()){
      this.rootNode = node;
      return;
    }

    if(data <= curr.data){
      if(!curr.left){
        curr.left = node;
        return;
      }

      return this.add(data, curr.left)
    } else{
      if(!curr.right){
        curr.right = node;
        return;
      }

      return this.add(data, curr.right);
    }
  }

  has(data) {
    const node = this.find(data)
    return node !== null;
  }

  find(data, curr = this.root()) {
    if(!curr){
      return null;
    }

    if(curr.data === data){
      return curr;
    }

    if(curr.data > data){
      return this.find(data, curr.left)
    }

    return this.find(data, curr.right);
  }

  remove(data) {
    if (!this.has(data)) {
      return;
    }
  
    const removeNode = (node, data) => {  
      if (data < node.data) {
        node.left = removeNode(node.left, data);
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
      } else {
        if (!node.left && !node.right) {
          return null;
        }
  
        if (!node.left) {
          return node.right;
        }
  
        if (!node.right) {
          return node.left;
        }
  
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
  
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
      }
      return node;
    };
  
    this.rootNode = removeNode(this.rootNode, data);
  }
  

  min() {
    let curr = this.root();

    while(curr.left){
      curr = curr.left;
    }

    return curr.data;
  }

  max() {
    let curr = this.root();

    while(curr.right){
      curr = curr.right;
    }

    return curr.data;
  }
}

module.exports = {
  BinarySearchTree
};