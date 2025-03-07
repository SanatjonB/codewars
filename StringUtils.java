// public class StringUtils {
  
//     public static String toAlternativeString(String string) {
//       // your code here!
//         String new_string = "";
//         for(int i = 0; i< string.length();i++){
//             if(Character.isUpperCase(string.charAt(i))){
//                 new_string+=Character.toLowerCase(string.charAt(i));
//             }
//             else{
//                 new_string+=Character.toUpperCase(string.charAt(i));
//             }
//         }
//         return new_string;
//     }
//   }
public class StringUtils{
    public static String toAlternativeString(String string){
        StringBuilder new_string = new StringBuilder();
        for(int i = 0; i < string.length(); i++){
            char currentChar = string.charAt(i);
            if(Character.isUpperCase(currentChar)){
                new_string.append(Character.toLowerCase(currentChar));
            }else{
                new_string.append(Character.toLowerCase(currentChar));
            }
        }
        return new_string.toString();
    }
}