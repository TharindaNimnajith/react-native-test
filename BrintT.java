import java.util.*;


public class BrintT {

    public static class NodeS{
        int id;
        String msg;
        
        NodeS prev;
        NodeS next;

        public NodeS(int id, String msg, NodeS prev){
            this.id = id;
            this.msg = msg;
            this.prev = prev;
            if(prev != null){
               prev.next = this;
            }
        }

        public String toString(){
            return "Node " + id + " with text " + msg;
        }
    }

    public static void main(String[] args){

        NodeS startNode = new NodeS(1, "S1", null);
        NodeS node = new NodeS(2, "S2", startNode);
        node = new NodeS(3, "S3", node);
        node = new NodeS(4, "S4", node);
        node = null;

        //1. write and call a function to traverse the nodes to find a node with a perticular message [input : a string to search like "S3" and startNode]
        //2. write the same but, as a recursive function 

        //System.out.println(getFirstNodeWithMessage(................));
        //System.out.println(getFirstNodeWithMessageR(...............));
        
     }
}
