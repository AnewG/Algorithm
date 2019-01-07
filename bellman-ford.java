package practice4;

import java.util.Scanner;

public class BellmanFord {

    private int[] distant;//源点到每一条边的距离
    private Edge[] edge;

    class Edge {
        int u;//边的起点
        int v;//边的终点
        int weight;//边的权重

        Edge(int u, int v, int weight) {
            this.u = u;
            this.v = v;
            this.weight = weight;
        }
    }

    private void relax(int u, int v, int weight) {
        if (distant[v] > distant[u] + weight) {
            distant[v] = distant[u] + weight;
        }
    }

    private void bellmanFord(int nodeNum) {

        distant = new int[nodeNum];

        //初始化源点到其它顶点之间的距离为无穷大
        for (int i = 1; i < nodeNum; i++) {
            distant[i] = Integer.MAX_VALUE;
        }
        distant[0] = 0;

        //进行(nodeNum - 1)次遍历
        for (int i = 1; i < nodeNum; i++) {
            for (Edge anEdge : edge) {
                relax(anEdge.u, anEdge.v, anEdge.weight);
            }
        }

        //判断是否有负回路:存在经过(nodeNum - 1)次遍历后仍可以松弛的边
        boolean flag = true;
        for (Edge anEdge : edge) {
            if (distant[anEdge.v] > distant[anEdge.u] + anEdge.weight) {
                flag = false;
                break;
            }
        }

        //打印结果
        if (flag) {
            System.out.println("没有负环");
            for (int i = 0; i < nodeNum; i ++) {
                System.out.print(distant[i] + " ");
            }
        } else {
            System.out.println("存在负回路,没有最短距离");
        }
    }


    public static void main(String[] args) {

        BellmanFord b = new BellmanFord();

        Scanner in = new Scanner(System.in);
        System.out.println("请输入一个图的顶点总数n和边总数p：");
        int nodeNum = in.nextInt();
        int edgeNum = in.nextInt();
        b.edge = new Edge[edgeNum];

        System.out.println("请输入具体边的数据：");
        for (int i = 0; i < edgeNum; i++) {
            int u = in.nextInt();
            int v = in.nextInt();
            int weight = in.nextInt();
            b.edge[i] = b.new Edge(u, v, weight);
        }

        b.bellmanFord(nodeNum);
    }
}
