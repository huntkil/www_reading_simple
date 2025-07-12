"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ThemeToggle } from "@/components/ThemeToggle"
import { 
  BookOpen, 
  Brain, 
  Target, 
  TrendingUp, 
  Users, 
  Settings,
  Info,
  CheckCircle,
  AlertTriangle
} from "lucide-react"

export function ExampleUsage() {
  const [progress, setProgress] = React.useState(13)
  const [checked, setChecked] = React.useState(false)
  const [switchChecked, setSwitchChecked] = React.useState(false)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto space-y-8">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">UI 라이브러리 예시</h1>
            <p className="text-muted-foreground">다양한 컴포넌트들의 사용 예시를 확인하세요</p>
          </div>
          <ThemeToggle />
        </div>

        {/* 알림 */}
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            이 페이지는 UI 라이브러리의 다양한 컴포넌트 사용 예시를 보여줍니다.
          </AlertDescription>
        </Alert>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <CardTitle>읽기 훈련</CardTitle>
              </div>
              <CardDescription>과학적 근거에 기반한 읽기 능력 향상</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">진행률</span>
                  <Badge variant="secondary">{progress}%</Badge>
                </div>
                <Progress value={progress} className="w-full" />
                <div className="flex space-x-2">
                  <Button size="sm">시작하기</Button>
                  <Button variant="outline" size="sm">자세히 보기</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-primary" />
                <CardTitle>인지과학</CardTitle>
              </div>
              <CardDescription>연구 기반의 훈련 방법론</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">속발음 제어</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">시각적 처리</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">청킹 훈련</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <CardTitle>목표 설정</CardTitle>
              </div>
              <CardDescription>개인별 맞춤 학습 계획</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="goal">목표 속도 (WPM)</Label>
                  <Input id="goal" type="number" placeholder="500" className="w-20" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="level">난이도</Label>
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">초급</SelectItem>
                      <SelectItem value="intermediate">중급</SelectItem>
                      <SelectItem value="advanced">고급</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 탭 인터페이스 */}
        <Card>
          <CardHeader>
            <CardTitle>훈련 모듈</CardTitle>
            <CardDescription>단계별 학습 과정을 확인하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="module1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="module1">기초 훈련</TabsTrigger>
                <TabsTrigger value="module2">중급 훈련</TabsTrigger>
                <TabsTrigger value="module3">고급 훈련</TabsTrigger>
              </TabsList>
              <TabsContent value="module1" className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="subvocalization" 
                    checked={checked}
                    onCheckedChange={setChecked}
                  />
                  <Label htmlFor="subvocalization">속발음 제어 훈련</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="visual" />
                  <Label htmlFor="visual">시각적 처리 훈련</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="chunking" />
                  <Label htmlFor="chunking">청킹 훈련</Label>
                </div>
              </TabsContent>
              <TabsContent value="module2" className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  중급 훈련 모듈에서는 더 고급 기법들을 학습합니다.
                </p>
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="advanced-mode" 
                    checked={switchChecked}
                    onCheckedChange={setSwitchChecked}
                  />
                  <Label htmlFor="advanced-mode">고급 모드 활성화</Label>
                </div>
              </TabsContent>
              <TabsContent value="module3" className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  고급 훈련 모듈에서는 전문적인 읽기 기법을 마스터합니다.
                </p>
                <RadioGroup defaultValue="speed">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="speed" id="speed" />
                    <Label htmlFor="speed">속도 중심</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="comprehension" id="comprehension" />
                    <Label htmlFor="comprehension">이해도 중심</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="balanced" id="balanced" />
                    <Label htmlFor="balanced">균형잡힌 접근</Label>
                  </div>
                </RadioGroup>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* 폼 예시 */}
        <Card>
          <CardHeader>
            <CardTitle>사용자 설정</CardTitle>
            <CardDescription>개인화된 훈련 설정을 구성하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">이름</Label>
                  <Input id="name" placeholder="홍길동" />
                </div>
                <div>
                  <Label htmlFor="email">이메일</Label>
                  <Input id="email" type="email" placeholder="example@email.com" />
                </div>
                <div>
                  <Label htmlFor="level">현재 수준</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="수준을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">초급 (150-250 WPM)</SelectItem>
                      <SelectItem value="intermediate">중급 (250-400 WPM)</SelectItem>
                      <SelectItem value="advanced">고급 (400+ WPM)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="feedback">피드백</Label>
                  <Textarea 
                    id="feedback" 
                    placeholder="훈련에 대한 의견이나 개선사항을 알려주세요..."
                    className="min-h-[100px]"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="notifications" />
                  <Label htmlFor="notifications">훈련 알림 받기</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="analytics" />
                  <Label htmlFor="analytics">상세 분석 공유</Label>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline">취소</Button>
              <Button>저장</Button>
            </div>
          </CardContent>
        </Card>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">평균 속도</span>
              </div>
              <div className="text-2xl font-bold">350 WPM</div>
              <p className="text-xs text-muted-foreground">+12% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-4 w-4 text-blue-500" />
                <span className="text-sm font-medium">총 훈련 시간</span>
              </div>
              <div className="text-2xl font-bold">24시간</div>
              <p className="text-xs text-muted-foreground">이번 달</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium">완료한 모듈</span>
              </div>
              <div className="text-2xl font-bold">8개</div>
              <p className="text-xs text-muted-foreground">총 12개 중</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-purple-500" />
                <span className="text-sm font-medium">이해도</span>
              </div>
              <div className="text-2xl font-bold">85%</div>
              <p className="text-xs text-muted-foreground">평균 점수</p>
            </CardContent>
          </Card>
        </div>

        {/* 경고 메시지 */}
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            훈련 중에는 정기적인 휴식을 취하는 것이 중요합니다. 30분마다 5분씩 휴식을 취하세요.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  )
} 