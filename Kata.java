import java.util.ArrayList;
import java.util.Arrays;

public class Kata {

  public static int[] arrayDiff(int[] a, int[] b) {
    ArrayList<Integer> listB = new ArrayList<>();
    for (int value : b) {
      listB.add(value);
    }

    ArrayList<Integer> resultList = new ArrayList<>();
    
    for (int value : a) {
      if (!listB.contains(value)) {
        resultList.add(value);
      }
    }

    int[] result = new int[resultList.size()];
    for (int i = 0; i < resultList.size(); i++) {
      result[i] = resultList.get(i);
    }

    return result;
  }

  public static void main(String[] args) {
    System.out.println(Arrays.toString(arrayDiff(new int[] {1, 2}, new int[] {1}))); 
    System.out.println(Arrays.toString(arrayDiff(new int[] {1, 2, 2, 2, 3}, new int[] {2})));  
  }
}
