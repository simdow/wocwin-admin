<template>
  <div class="login">
    <div class="content">
      <div class="star1"></div>
      <div class="star2"></div>
      <div class="star3"></div>
      <div class="star4"></div>
      <div class="star5"></div>
      <transition name="fade" mode="out-in">
        <div :key="showRegister ? 'register' : 'login'" class="input-format">
          <img src="@/assets/images/logo.jpg" class="logon" />
          <h2 class="title">{{ showRegister ? "注册" : "登录" }}</h2>
          <el-form v-if="!showRegister" ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" clearable type="text" placeholder="账号">
                <template #prefix>
                  <el-icon>
                    <User />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                placeholder="密码"
                clearable
                @keyup.enter="handleLogin(loginFormRef)"
                show-password
              >
                <template #prefix>
                  <el-icon>
                    <Lock />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item style="width: 100%">
              <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item style="width: 100%">
              <el-button :loading="loading" size="default" type="primary" style="width: 50%" @click="handleLogin(loginFormRef)">
                <span v-if="!loading">登 录</span>
                <span v-else>登 录 中...</span>
              </el-button>
              <el-button type="primary" plain style="width: 45%" @click="showRegister = true">注册</el-button>
              <!-- <a class="link-button" @click="showRegister = true">{{ showRegister ? "返回登录" : "去注册" }}</a> -->
            </el-form-item>
          </el-form>
          <el-form v-else ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" clearable type="text" placeholder="账号">
                <template #prefix>
                  <el-icon>
                    <User />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                placeholder="密码"
                clearable
                @keyup.enter="handleLogin(loginFormRef)"
                show-password
              >
                <template #prefix>
                  <el-icon>
                    <Lock />
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item style="width: 100%">
              <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item style="width: 100%">
              <el-button :loading="loading" size="default" type="primary" style="width: 50%" @click="handleLogin(loginFormRef)">
                <span v-if="!loading">登 录</span>
                <span v-else>登 录 中...</span>
              </el-button>
              <el-button type="primary" plain style="width: 45%" @click="showRegister = false">返回登录</el-button>
              <!-- <a class="link-button" @click="showRegister = false">{{ showRegister ? "返回登录" : "去注册" }}</a> -->
            </el-form-item>
          </el-form>
        </div>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts" name="login">
import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/utils/jsencrypt";
import type { FormInstance } from "element-plus";
import { useUserStore } from "@/store/modules/user";
import { ElNotification } from "element-plus";
import { getTimeState } from "@/utils";
const showRegister = ref(false);
const userStore = useUserStore();

const loginForm = reactive({
  username: "admin",
  password: "123456",
  rememberMe: false
});
const loginRules = reactive({
  username: [{ required: true, trigger: "blur", message: "用户名不能为空" }],
  password: [{ required: true, trigger: "blur", message: "密码不能为空" }]
});
// 获取cookie中记录用户信息
const username = Cookies.get("username");
const password = Cookies.get("password");
const rememberMe = Cookies.get("rememberMe");
loginForm.username = username ? username : loginForm.username;
loginForm.password = password ? decrypt(password) : loginForm.password;
loginForm.rememberMe = rememberMe ? Boolean(rememberMe) : false;

const loading = ref(false);
const router = useRouter();
const loginFormRef = ref<FormInstance>();
// 点击登录
const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    console.log(111, fields);
    if (!valid) return;
    loading.value = true;
    if (loginForm.rememberMe) {
      Cookies.set("username", loginForm.username, { expires: 30 });
      Cookies.set("password", encrypt(loginForm.password), {
        expires: 30
      });
      Cookies.set("rememberMe", String(loginForm.rememberMe), {
        expires: 30
      });
    } else {
      Cookies.remove("username");
      Cookies.remove("password");
      Cookies.remove("rememberMe");
    }
    userStore
      .Login(loginForm)
      .then(() => {
        router.push({ path: "/" });
        ElNotification({
          title: getTimeState(),
          message: "欢迎登录 Wocwin-Admin",
          type: "success",
          duration: 3000
        });
      })
      .finally(() => (loading.value = false));
  });
};
// const handleRegister = () => {
//   // 这里可以根据需要进行相应的处理逻辑，比如发送请求等

//   // 路由跳转到同一界面但是不同内容的页面
//   router.push({ path: "./error/401.vue" });

//   // 示例：给出提示
//   ElNotification({
//     title: "注册成功",
//     message: "欢迎注册新用户",
//     type: "success",
//     duration: 3000
//   });
// };
</script>

<style lang="scss">
@function getShadows($n) {
  $shadows: "#{random(100)}vw #{random(100)}vh #fff";
  @for $i from 2 through $n {
    $shadows: "#{$shadows},#{random(100)}vw #{random(100)}vh #fff";
  }
  @return unquote($shadows);
}
@keyframes moveUp {
  100% {
    transform: translateY(-100vh);
  }
}
$duration: 600s;
$count: 1400;
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  background-size: cover;
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    // padding-right: 8%;
    .input-format {
      width: 450px;
      height: 440px;
      padding: 30px;
      text-align: center;
      background: #ffffff;
      border-radius: 4px;
      box-shadow: 0 2px 24px 0 rgb(0 0 0 / 20%);
      .logon {
        width: 110px;
        height: 110px;
        border-radius: 40%;
      }
      .title {
        margin-top: 7px;
        margin-bottom: 36px;

        // font-size: 29px;
        font-family: PingFangSC-Medium, "PingFang SC";
        font-weight: 600;
        color: #142969;
      }
      .login-form {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-size: 14px;
        font-feature-settings: "tnum";
        font-variant: tabular-nums;
        line-height: 1.5;
        color: rgb(0 0 0 / 65%);
        list-style: none;
        .el-input {
          height: 40px;
          input {
            height: 40px;
          }
        }
        .input-icon {
          width: 14px;
          height: 39px;
          margin-left: 2px;
        }
      }
    }
    @for $i from 1 through 5 {
      $duration: floor(calc($duration / 2));
      $count: floor(calc($count / 2));
      .star#{$i} {
        $size: #{$i}px;
        position: fixed;
        top: 0;
        left: 0;
        width: $size;
        height: $size;
        border-radius: 50%;
        box-shadow: getShadows($count);
        animation: moveUp $duration linear infinite;
        &::after {
          position: fixed;
          top: 100vh;
          left: 0;
          width: $size;
          height: $size;
          content: "";
          border-radius: inherit;
          box-shadow: inherit;
        }
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s, transform 0.7s;
}

.fade-enter {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
