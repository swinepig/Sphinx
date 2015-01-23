java pragram
============

.. literalinclude:: Test2.java

.. literalinclude:: conf.py


java代码

.. highlight:: java

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