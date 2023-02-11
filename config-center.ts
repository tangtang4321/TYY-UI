const { Gitlab } = require("@gitbeaker/node");
// gitlab url
const GITLAB_URL = "http://gitlab.gerpgo.com";
// 连接gitlab，需要personal access toekn。通过：点击右上角头像 -> edit profile -> Access Tokens设置
const PERSONAL_ACCESS_TOKEN = "Vv-3c3Yxu4Uh9GfV_7VD";
// 配置中心的项目id，通过：选择对应项目 -> Settings -> General 获取
const PROJECT_ID = 501;
// 需要获取文件的分支
const BRANCH_NAME = "master";
function get(filePath, branchName = BRANCH_NAME) {
  try {
    const api = new Gitlab({
      host: GITLAB_URL,
      token: PERSONAL_ACCESS_TOKEN,
    });
    return api.RepositoryFiles.show(PROJECT_ID, filePath, branchName).then(
      (project) => {
        if (project && project.content) {
          // 返回的内容是base64编码，需要进行解码
          const buff = Buffer.from(project.content, "base64");
          const str = buff.toString("utf-8");
          console.log("=========", `获取配置文件${filePath}成功`);
          return str;
        } else {
          console.log("=========", `未找到文件：${filePath}`);
        }
      }
    );
  } catch (e) {
    console.log("=========", `获取文件：${filePath}出错`, e);
  }
}
// test...
get("env.d.ts", "main").then((res) => {
  console.log(res);
});

module.exports = {
  get,
};
