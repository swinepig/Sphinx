java pragram
============

逆时针数字排序
^^^^^^^^^^^^^^^^^^

.. code-block:: java

   public class Test2 {
  
    private static boolean is_turn;
    private static int[][] array;
  
    /**
     * 逆时针数字排序
     * @param args
     */
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        while (true) {
            System.out.println("请输入行数和列数  已空格分开");
            String str = sc.next();
            if ("exit".equalsIgnoreCase(str)) {
                System.exit(0);
            }
            generate(Integer.parseInt(str.split(",")[0]), Integer.parseInt(str
                    .split(",")[1]));
        }
  
    }
  
    /***
     * 
     * @param row
     * @param coloum
     */
    private static void generate(int row, int coloum) {
        array = new int[row][coloum];
        disPlayArray(generateCircle(1, row, coloum, 1));
    }
  
    /***
     * 
     * @param startNum
     * @param row
     * @param coloum
     * @return
     */
    private static int[][] generateCircle(int startNum, int row, int coloum,
            int cengshu) {
        if (row == 0 || coloum == 0) {
            return array;
        } else if (row == 1 && coloum == 1) {
            array[cengshu - 1][cengshu - 1] = startNum;
            return array;
        } else if (row == 1 && coloum != 1) {
            for (int i = cengshu - 1; i <= coloum+cengshu-2; i++) {
                array[cengshu - 1][i] = startNum++;
            }
            return array;
        } else if (row != 1 && coloum == 1) {
            for (int i = cengshu - 1; i <= row+cengshu-2; i++) {
                array[i][cengshu - 1] = startNum++;
            }
            return array;
        } else {
            is_turn = false;// 初始化为false
            int endNum = 2 * (row + coloum) + startNum - 5;
            int x = cengshu - 1, y = cengshu - 1;
  
            for (int i = startNum - 1; i < endNum; i++) {
                array[x][y] = i + 1;
                if ((x + 1) < row + cengshu - 1 && !is_turn) {
                    x++;
                } else if ((y + 1) < coloum + cengshu - 1 && !is_turn) {
                    if ((++y) == (coloum + cengshu - 2)) {
                        is_turn = true;
                    }
                } else if ((y + 1) == coloum + cengshu - 1 && x > cengshu - 1
                        && is_turn) {
                    x--;
                } else if ((x + 1) == cengshu && y > cengshu && is_turn) {
                    y--;
                }
            }
            return generateCircle(endNum + 1, row - 2, coloum - 2, cengshu + 1);
        }
    }
  
    private static void disPlayArray(int[][] array) {
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array[i].length; j++) {
                if (array[i][j] > 9 && array[i][j] < 100) {
                    System.out.print(array[i][j] + "  ");
                } else if (array[i][j] < 10) {
                    System.out.print(array[i][j] + "   ");
                } else {
                    System.out.print(array[i][j] + " ");
                }
            }
            System.out.println();
        }
  
    }
  
   }
   
   
.. code-block:: java

   import java.util.ArrayList;
   import java.util.List;
   import java.util.Scanner;
  
   public class Test3 {
      
    /*
     * 输入字符串长度，字符串比如“3，1，2，4”,m值
     * 所输入的字符串数字都是大于0
     * 要求从左往右循环计数，数到m就将第m个元素出列，然后将出列的元素值赋给m
     * 如此进行直到所有元素都出列
     * */
  
    private static final int ZERO = 0;
  
    /**
     * @param args
     */
    public static void main(String[] args) {
  
        System.out.println("请输入字符串长度");
        Scanner sc1 = new Scanner(System.in);
        Integer.parseInt(sc1.next());
  
        System.out.println("请输入字符串 比如\"3,1,2,4\"");
        Scanner sc2 = new Scanner(System.in);
        String str = sc2.next();
        // 将字符串装入list中
        List<Integer> list = new ArrayList<Integer>();
        for (int i = 0; i < str.split(",").length; i++) {
            list.add(Integer.parseInt(str.split(",")[i]));
        }
  
        System.out.println("请输入M值");
        Scanner sc3 = new Scanner(System.in);
        int mValue = Integer.parseInt(sc3.next());
  
        // System.out.println(strLength + str + mValue);
  
        process(list, mValue);
    }
  
    public static void process(List<Integer> list, int mValue) {
  
        int list_size = list.size();// 列表长度
        if (list_size > 1) {
            // mValue与列表长度求模,从list表中取出的元素
            int index = mValue % list_size;// list表中第index个元素
            int ys = 0;
  
            int offset = 0;// index和列表长度之差
            int new_mValue = 0;
            if (ZERO != index) {
                // ys=list.get(index);
                ys = list.remove(index - 1);
                System.out.print(ys+" ");
                offset = list_size - index;
                new_mValue = ys - offset;
                if (new_mValue <= 0) {
                    new_mValue = index -1+ ys;
                }
            } else {
                // ys=list.get(list_size);
                ys = list.remove(list_size - 1);
                System.out.print(ys+" ");
                new_mValue = ys;
            }
  
            // 递归
            process(list, new_mValue);
        } else {
            System.out.print(list.get(list_size - 1)+" ");
        }
    }
   }
   
项目配置文档conf.py
^^^^^^^^^^^^^^^^^^^^^^^^  
.. literalinclude:: conf.py
   :linenos:
